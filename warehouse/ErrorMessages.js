export function showMsgBoxError(){
    this.boxTwo = ''
    this.$bvModal
      .msgBoxOk('Please Accept the Terms & Conditions', {
        title: "Submittion Error",
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'success',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
      .then(value => {
        this.boxTwo = value
      })
      .catch(err => {
        console.log(err)
      })
  }