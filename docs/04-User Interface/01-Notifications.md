---
title: "Sending Notifications"
sidebar_label: "Sending Notifications"
---

[`ETS2LA.Notifications`](https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/blob/rewrite/ETS2LA.Notifications/Notifications.cs#L3)

You can use `NotificationHandler` to send (and receive) notifications across plugins. These are by default displayed as toast notifications inside of `ETS2LA.UI`, but plugins can also listen to them and display them in their own way if they want to.

### How to send a notification
```csharp
using ETS2LA.Notifications;

NotificationHandler.Current.SendNotification(new Notification
{
    Id = "YourPlugin.NotificationId", // Never change this ID once set!
    Title = "Your Message Title",
    Content = "Your message content\nthat supports newlines",
    CloseAfter = 2.0f, // How many seconds until the notification closes automatically
    Level = NotificationLevel.Success,
    Progress = 0.5f, // Set CloseAfter to 0 if you want to use Progress
    IsProgressIndeterminate = false, // Again CloseAfter to 0 is required,
                                     // this shows an action that doesn't have a known duration
});
```
You can continue calling `SendNotification()`, and updates to existing notifications will be redirected to `UpdateNotification`.

### How to subscribe to notifications
```csharp
using ETS2LA.Notifications;

// You need all three to successfully listen to notifications and get their updates.
NotificationHandler.Current.OnNotificationAdded += OnNotificationAdded;
NotificationHandler.Current.OnNotificationUpdated += OnNotificationUpdated;
NotificationHandler.Current.OnNotificationRemoved += OnNotificationRemoved;

private void OnNotificationAdded(object sender, Notification notification)
{
    Console.WriteLine($"Notification added: {notification.Title} - {notification.Content}");
}

...
```