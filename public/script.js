/*----------cached elements----------*/
let newSkillAudio = new Audio('/assets/audio/newskill.mp3')
let newSkillBtn = document.getElementById('new-skill')
let newSkillForm = document.getElementById('new-form')
let submitTimer

/*----------Event Listeners----------*/
newSkillBtn.addEventListener('click', newSkillSound)
newSkillForm.addEventListener('submit', delaySubmit)

/*----------Functions----------*/
function delaySubmit(event){
  console.log('submitTimer set')
  event.preventDefault()
  submitTimer = setTimeout(() => {
    this.submit()
    console.log('submitted after 5 seconds')
  }, 5300)
}

function newSkillSound() {
  newSkillAudio.volume = .5
  newSkillAudio.play()
}