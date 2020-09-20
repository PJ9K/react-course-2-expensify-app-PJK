import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})

// code nodig om enzyme op te zetten en het niet altijd te moeten importeren denk ik