import Handlebars from "handlebars";
import { default as $ } from "jquery";
import activities from "./templates/activities.hbs";
import activity_entry from "./templates/activity_entry.hbs";
import link_entry from "./templates/link_entry.hbs";
Handlebars.registerPartial("activity_entry", activity_entry);
Handlebars.registerPartial("link_entry", link_entry);

const data = {
  activities: [{ links: [1] }, { links: [1] }, { links: [1] }, { links: [1] }]
};
loadPage();

function addActivity() {
  const template = Handlebars.compile(activity_entry);
  const new_activity = template();
  const newNode = $(new_activity);
  newNode.insertBefore("#add_activity");
  newNode.find(".remove_activity").click(removeActivity);
  newNode.find(".remove_link").click(removeLink);
}

function addLink() {
  const template = Handlebars.compile(link_entry);
  const new_link = template();
  const newNode = $(new_link);
  const links_list = $(this)
    .parent()
    .find(".links_list");
  console.log("......links_list", $(this), links_list);
  links_list.append(newNode);
  newNode.find(".remove_link").click(removeLink);
}

function removeActivity() {
  $(this)
    .closest(".activity_entry")
    .remove();
}

function removeLink() {
  $(this)
    .closest(".link_entry")
    .remove();
}

function loadPage() {
  const template = Handlebars.compile(activities);
  const html = template(data);
  $("#content").html(html);
  $("#add_activity").click(addActivity);
  $(".remove_activity").click(removeActivity);
  $(".add_link").click(addLink);
  $(".remove_link").click(removeLink);
}
