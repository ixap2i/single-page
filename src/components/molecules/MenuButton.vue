<template>
  <ion-content>
    <!-- fab placed in the center of the content with a list on each side -->
    <ion-fab vertical="center" horizontal="center" slot="fixed">
      <ion-fab-button>
        menu
      </ion-fab-button>
      <ion-fab-list side="top">
        <ion-fab-button>
          <span @click="pushLink('skill')">skill</span>
        </ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="bottom">
        <ion-fab-button>
          <span @click="pushLink('portfolio')">portfolio</span>
        </ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="start">
        <ion-fab-button>
          <span @click="pushLink('job')">job</span>
        </ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="end">
        <ion-fab-button>
          <span href='/' @click="pushLink('/')">top</span>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </ion-content>
</template>

<script>
import {
  IonAvatar, IonChip, IonText,
  IonCol, IonGrid, IonRow,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonFooter,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/vue'
import {
  add,
  arrowBackCircle,
  arrowForwardCircle,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoVimeo,
  person,
  settings,
  share
} from 'ionicons/icons'
export default {
  components: {
    IonAvatar,
    IonChip,
    IonText,
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonFooter,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar
  },
  setup () {
    return {
      add,
      arrowBackCircle,
      arrowForwardCircle,
      logoFacebook,
      logoInstagram,
      logoTwitter,
      logoVimeo,
      person,
      settings,
      share
    }
  },
  methods: {
    pushLink (path) {
      this.$router.push(path)
    }
  }
}
</script>
