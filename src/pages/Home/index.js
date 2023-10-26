import BarChart from "./components/BarChart"

const Home = () => {
  return (
    <div>
      <BarChart title={'framework difficulty'} />
      <BarChart title={'framework usage'} />
    </div>
  )
}

export default Home