self.addEventListener("push", event => {
    const options = {
        body: "This is a reminder to add tasks to your to-do list.",
        icon: "/static/images/notification-icon.png",
        vibrate: [200, 100, 200],
        tag: "todo-reminder",
    };
    event.waitUntil(
        self.registration.showNotification("Daily Reminder", options)
    );
});