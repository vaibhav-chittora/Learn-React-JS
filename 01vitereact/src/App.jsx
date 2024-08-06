
import Button from "./Button"
import Chai from "./chai"

function App() {

  return (
    <>

      <h1>Cahi aur react</h1>
      <Chai />
      <Button
        text={'Danger'}
        buttonType={'submit'}
        buttonStyle='dangerBtn' 
        onclickHandler={() => {
          console.log('Danger Button Clicked');
        }}
      />

      <Button
        text={'Success'}
        buttonType={'reset'}
        buttonStyle='successBtn'
        onclickHandler={()=>{
          console.log("Success Btn Clicked");
        }}
      />
      <Button
        text={'Warning'}
        buttonStyle="warningBtn"
        onclickHandler={()=>{
        console.log(  "Warning Btn Clicked");
        }}
      />
      <Button onclickHandler={()=>{
        console.log("Default Btn Clicked");
      }} />


    </>
  )
}

export default App
