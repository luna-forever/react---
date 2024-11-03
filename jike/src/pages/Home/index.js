import Barchart from "./component/BarChart"

const Home = () => {
  return (
  <div>
    <Barchart 
      xData={['Vue', 'React', 'Angular']}
      sData={[2000, 5000, 1000]}/>
    <Barchart
        xData={['Vue', 'React', 'Angular']}
        sData={[200, 500, 100]}
        style={{ width: '500px', height: '400px' }} />
  </div>
  )
}
export default Home