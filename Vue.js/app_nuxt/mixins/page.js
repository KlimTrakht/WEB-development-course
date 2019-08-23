import {mapGetters} from 'vuex'

export default {

  data() {
    return {
      dialog: false,
      dialogType: '',
      dialogFormID: null,
      vueScrollToInProcess: false,
      activeForm: 'cabinet-form-design-behavior'
    }
  },
  methods: {
    setResponsiveState() {
      let responsiveState = 'desktop';
      if (window.innerWidth <= 375) {
        responsiveState = 'mobile'
      } else if (window.innerWidth < 991) {
        responsiveState = 'tablet'
      } else {
        responsiveState = 'desktop'
      }
      this.$store.dispatch('setResponsiveState', responsiveState)
    },
    showNotification(message, type='success') {
      if(type === 'success') {
        this.$store.commit('notifications/setSuccessMessage', message);
      }
      else if(type === 'error') {
        this.$store.commit('notifications/setErrorMessage', {error: message});
      }
      this.$store.commit('notifications/setNotificationStatus',true);
      setTimeout(()=> this.clearNotifications(), 3000)
    },
    clearNotifications() {
      this.$store.commit('notifications/setNotificationStatus', false);
      this.$store.commit('notifications/unsetErrorMessage');
      this.$store.commit('notifications/unsetSuccessMessage');
    },
    openForm(formType, id) {
      this.$root.dialog = true;
      this.$root.dialogType = formType;
      this.$root.dialogFormID = id !== undefined ? id : null;
    },
    closeForm() {
      this.$root.dialog = false;
      this.$root.dialogType = '';
      this.$root.dialogFormID = null;
    },
    deleteForm(id) {
      this.$store.dispatch('editor/deleteForm', id).then(() => {
        this.closeForm();
        this.$router.replace('/cabinet/forms')
        this.$store.dispatch('editor/getForms');
      });
    },
    copyToClipboard(text) {
      if (!navigator.clipboard) {
        this.fallbackCopyTextToClipboard(text);
        return;
      }
      navigator.clipboard.writeText(text).then(() => {
        this.showNotification('The link is copied to clipboard')
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
        this.showNotification('The link is copied to clipboard', 'error')
      });
    },
    fallbackCopyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);

      if (navigator.userAgent.match(/ipad|iphone|Safari/i)) {
        document.getElementById('link').select();
      } else {
        textArea.focus();
        textArea.select();
      }
      try {
        var successful = document.execCommand('copy');
        if(successful){
          this.showNotification('The link is copied to clipboard') ;
        }else {
          this.showNotification('Unable to copy to clipboard')
        }
      } catch (err) {
        this.showNotification('Unable to copy to clipboard ' + err)
      }

      document.body.removeChild(textArea);
    },
    findObjectInArray(array, property, val) {
      return array.filter(item => item[property] == val)[0]
    },
    deleteObjectFromArray(array, property, propertyValue) {
      const elementId = array.findIndex(item => item[property] == propertyValue);
      array.splice(elementId, 1)
    },
    cloneObject(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    clearSearch() {
      this.searchParams = JSON.parse(JSON.stringify(this.searchParamsDefault));
      this.requestSearch()
    }
  },

}
