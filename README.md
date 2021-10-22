# Pomodoro timer  
> A simple, static, [pomodoro timer](https://en.wikipedia.org/wiki/Pomodoro_Technique) with [React](https://reactjs.org).  

## Functionalities  
- Add or remove time with a step of 5 minutes, up to 60 minutes.
- Reset button set timer to your previously set time. 
- Press ctrl and left click on reset will set timer to 25 minutes.
- When time is up, you can restart timer directly.  

# About the project  
- Type of challenge: **learning**
- Repository : [**`react-pomodoro`**](https://github.com/Yves852/react-pomodoro)
- Deadline : **22/10/2021 23:59 pm**
- Team : **solo**
- Author : [Yves Thirion](https://github.com/Yves852)

### Link  
[My pomodoro timer here](https://yves852-pomodoro.netlify.app)

### Minimal requirements  
- Display a big timer (minutes and seconds).
- Four buttons:
  - **plus (+)** and **minus (-)**, they will allow the user to adjust the _minutes counter_ - **only when it's stopped**.
  - **start**, to run the timer (it will then change to **stop**), to serve as a _toggle_ button
  - **reset**, to… reset the timer to its original value
- At the end of the timer, show a modal to invite user to _take a break_. The modal will have two buttons:
  - One to close the modal
  - Another to close the modal _and_ start a new timer
