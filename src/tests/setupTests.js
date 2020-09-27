import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DotEnv from 'dotenv'

Enzyme.configure({
  adapter: new Adapter()
})

DotEnv.config({ path: '.env.test' })

// code nodig om enzyme op te zetten en het niet altijd te moeten importeren denk ik