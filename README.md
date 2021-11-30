# Getting Started
The `projet-14-plugin` as its name suggests, is a plugins developed as part of my OpenClassRooms training program.
This plugin is not magic, this plugin does not make coffee, but if you want to have coffee with me we can make an arrangement 👌
We still haven't answered the question "but what does this plugin do" ... ... It's quite simply a React plugin allowing to display an alert, for more information go to the section "How the plugin works"
## Installation
```
$ npm install --save projet-14-plugin
$ yarn add projet-14-plugin
```

### How the plugin works

**Import module:**
```jsx
import Alert, { AlertActions, AlertContent, AlertIcon, AlertTitle } from 'projet-14-plugin/dist'
```

**Create your state in your component:**
```jsx
const [mySuperBrightAlert, setMySuperBrightAlert] = useState(false)
```

**Render your alert in your component:**
```jsx
    return (
        <>
            <Alert name="my-super-bright-alert" show={mySuperBrightAlert} setShow={setMySuperBrightAlert}>
                <AlertIcon IconComponent={GreatStarSVG} color="info" />
                <AlertTitle>This is my super bright alert</AlertTitle>
                <AlertContent>Don't forget to follow me on my github account</AlertContent>
                <AlertActions>
                    <button type="button" onClick={() => setMySuperBrightAlert(false)}>It was famous</button>
                </AlertActions>
            </Alert>
        </>
    )
```

**`<Alert/>` params:**
- name: *id* of your alert title use to define *Aria*
- showClose: Boolean use to show or hide cross close button (`true` by default)
- show: Boolean state use to show and hide your alert
- setShow: function that updates your state

**`<AlertIcon/>` params:**
- IconComponent: svg component use inside alert icon 
  Import your svg component as 
  ```jsx
  import { ReactComponent as GreatStarSVG } from '../assets/images/icons/great-star.svg'
  ```
- color: svg ring color base on Bootstrap colors `['primary', 'danger', 'warning', 'success', 'info']` (`'primary'` by default)

### More about this plugin
To know more about this plugin or on my work, do not hesitate to contact me on my main networks
[Twitter](https://twitter.com/TouilYann) - [Linkedin](https://www.linkedin.com/in/yann-touil-ab7696128/) - [GitHub](https://github.com/yanntouil)





