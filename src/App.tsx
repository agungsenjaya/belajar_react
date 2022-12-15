import { useEffect, useState} from 'react'
import {IconBrandTwitter, IconBrandFacebook} from '@tabler/icons'
import Button from './component/Button'
import Card from './component/Card'
import Counter from './component/Counter'
import PlaceContentCenter from './component/PlaceContentCenter'

function App() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setInterval(() => setCount((preState) => preState + 1),2000);
  // });

  return (
    <div>
      {/* Button */}
      {/* <div className="flex gap-x-2">
      <Button {...{type:'submit', onClick: () => console.log('bisa') }}>
      <IconBrandFacebook/>
        Register
      </Button>
      <Button>
      <IconBrandTwitter/>
        Login
      </Button>
      </div> */}
      {/* Card */}
      
      {/* <div className={'bg-slate-100 antialiased flex items-center justify-center min-h-screen'}>
      <div className={'max-w-md w-full'}>
      <Card>
        <Card.Title>
          Header
        </Card.Title>
        <Card.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem maxime reprehenderit blanditiis. Eum iste voluptate ex quis commodi fugiat, illo accusantium natus quibusdam obcaecati praesentium quaerat architecto minus debitis adipisci.
        </Card.Body>
        <Card.Footer>
          <Button>Button</Button>
        </Card.Footer>
      </Card>
      </div>
      </div> */}
      <PlaceContentCenter>
        <Counter count={count} setCount={setCount}/>
      </PlaceContentCenter>
      </div>
  )
}

export default App;