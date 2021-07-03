/* eslint-disable */

// define devices and controls //
var arcadeDrive, motorMotor;
var driveStick, weaponSlider, forwardButton, reverseButton;

// this is run once //
function setup () {
  // setup hardware interface //
  arcadeDrive = new ArcadeDrive()
  weaponMotor = new Motor('weaponMotor')

  // create the drive joystick //
  driveStick = new Joystick('drive')
  driveStick.position.x = 20  // positions + sizes in % of screen size //
  driveStick.position.y = 50
  driveStick.radius = 15

  // weapon power //
  weaponSlider = new Slider('weapon')
  weaponSlider.position.x = 85
  weaponSlider.position.y = 20
  weaponSlider.radius = 5
  weaponSlider.length = 30
  weaponSlider.type = Slider.VERTICAL
  weaponSlider.sticky = true
  weaponSlider.style = 'red'

  // drive direction buttons //
  reverseButton = new Button('reverse')
  reverseButton.position.x = 60
  reverseButton.position.y = 30
  reverseButton.radius = 5
  reverseButton.sticky = true
  reverseButton.style = 'blue'
  reverseButton.groupName = 'weaponGroup'

  forwardButton = new Button('forward')
  forwardButton.position.x = 60
  forwardButton.position.y = 70
  forwardButton.radius = 5
  forwardButton.sticky = true
  forwardButton.style = 'blue'
  forwardButton.groupName = 'weaponGroup'
  forwardButton.pressed = true
  
  infoBox.botStatus = {}
}

const tooClose = 15

// this is run at update rate //
function loop () {
  //var infoBox = document.getElementById('info-box')
  var dist = infoBox.botStatus.cm
  if (dist === undefined || dist < 3 || dist > 200) dist = 200
  var avoid = (tooClose - dist) * 0.02
  if (avoid < 0) avoid = 0
  if (dist < tooClose) console.log(avoid, driveStick.x)
  // handle driving //
  var speed = driveStick.y
  var rotation = driveStick.x + avoid
  arcadeDrive.setSpeedAndRotation(speed, rotation)
  
  // handle weapon control //
  weaponMotor.set(weaponSlider.value)

  // handle driving reverse //
  if (reverseButton.pressed) {
    arcadeDrive.leftMotor.reversed = true
    arcadeDrive.rightMotor.reversed = true
    arcadeDrive.swapMotors = true
  } else {
    arcadeDrive.leftMotor.reversed = false
    arcadeDrive.rightMotor.reversed = false
    arcadeDrive.swapMotors = false
  }
}

setInterval(fireUpdate,100) //even when not being touched, do occasional updates, which calls the loop
