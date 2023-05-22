import {COLUMNS,state,updateDragging,createOrderData,ITEMS,} from "./data.js";
import {createOrderHtml,html,updateDraggingHtml,moveToColumn,} from "./view.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */

const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

//----Opens Help screen -----
const handleHelpToggle = () => {
  html.help.overlay.toggleAttribute("open");
};
html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

//------Opens print menu------
const handleAddToggle = () => {
  html.add.overlay.toggleAttribute("open");
};
html.other.add.addEventListener("click", handleAddToggle);
html.add.cancel.addEventListener("click", handleAddToggle);

//---Submit information ----
const handleAddSubmit = (event) => {
  event.preventDefault(); // method is used to prevent the browser from executing the default action

  const order = {
    id: state.orders,
    title: html.add.title.value,
    table: html.add.table.value,
  };

  if (order.title === "Spinaches" || order.title === "Tomatoes" || order.title === "Potatoes" || order.title === "Onions") {
    const orderElement = createOrderHtml(order);
    html.area.printing.append(orderElement);

    html.add.form.reset();
    html.add.overlay.close();
  } else if (order.title !== "Spinaches" && order.title !== "Tomatoes" && order.title !== "Potatoes" && order.title !== "Onions") {
    html.add.overlay.close();
    html.help.overlay.toggleAttribute("open");
  }

};
html.add.form.addEventListener("submit", handleAddSubmit);

//----- Opens edit print menu -----
const handleEditToggle = () => {
  html.edit.overlay.toggleAttribute("open");
};
html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);

//----- Submit edited information -----
const handleEditSubmit = (event) => {
  event.preventDefault(); // method is used to prevent the browser from executing the default action

  const { id, title, table, created, column } = {
    title: html.edit.title.value,
    table: html.edit.table.value,
    created: new Date(),
    id: state.orders,
    column: html.edit.column.value,
  };

  const order = { id, title, table, created, column };

  // Find the index of the order to be updated
  const orderId = -1; //-1 allows us to check if an order index has been found
  // Find the order element in the HTML
  for (let i = 0; i < state.orders.length; i++) {
    if (state.orders[i].id === id) {
      orderId = i;
      break;
    }
  }

  // Update the item data in the state object
  state.orders[orderId] = createOrderData(order);

  // Update the item element with the new data
  
  const newOrder = createOrderHtml(order);
  const oldOrder = document.querySelector(`[data-id="${id}"]`);
  oldOrder.replaceWith(newOrder);

 if (order.title !== "Spinaches" && order.title !== "Tomatoes" && order.title !== "Potatoes" && order.title !== "Onions") {
    html.add.overlay.close();
    html.help.overlay.toggleAttribute("open");
  }


 if (column === "printing") {
    html.area.printing.append(newOrder);
  } else if (column === "done") {
    html.area.done.append(newOrder);
  }

  html.edit.form.reset();
  html.edit.overlay.close();
};
html.edit.form.addEventListener("submit", handleEditSubmit);

