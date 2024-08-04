import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OneSignal } from "onesignal-ngx";
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class OneSignalService {

  constructor(
    private oneSignal: OneSignal,
    private router: Router
  ) { }


  oneSignalSetup() {
    try {
      this.oneSignal.init({
        appId: environment.onesignalAppId,
        autoResubscribe: true,
        allowLocalhostAsSecureOrigin: true
      }).then(() => {
        this.oneSignal.isPushNotificationsEnabled(res => {
        })
        this.oneSignal.getNotificationPermission().then(res => {
        })
        this.oneSignal.addListenerForNotificationOpened().then(res => {
        })
        this.oneSignal.on("notificationDisplay", (res) => {
          if (res) {
            let audio = new Audio();
            audio.src = "assets/notification.mp3";
            audio.load();
            audio.play();
            if (res.data) {
              Swal.fire({
                position: 'top-end',
                title: res.heading,
                text: res.content,
                imageUrl: 'assets/icons/alert-notification.svg',
                imageHeight: 70,
                showCancelButton: true,
                confirmButtonText: 'View',
                cancelButtonText: 'Cancel',
                confirmButtonColor: '#005074'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.open('/enquiry');
                } else if (result.isDismissed) {
                  console.log('Dismissed!');
                }
              })
            }
          }

        })
      });
    } catch (e) {
      console.log("Error while setup onesignal", JSON.stringify(e))
    }
  }
}
