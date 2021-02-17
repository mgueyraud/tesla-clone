import './App.css';

import Header from './components/Header/Header';
import SnapItem from './components/SnapItem/SnapItem';

import Accessories from "./assets/img/Desktop-Accessories.jpg";
import Model3 from "./assets/img/Desktop-Model3.jpeg";
import ModelS from "./assets/img/Desktop-ModelS.jpeg";
import ModelX from "./assets/img/Desktop-ModelX.jpeg";
import ModelY from "./assets/img/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/img/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/img/Desktop-SolarRoof.jpeg";
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <SnapItem
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg={ModelS}
          actions={[
            <Button isPrimary>Custom Order</Button>,
            <Button >Existing inventory</Button>
          ]}
          isFirst
        />
        <SnapItem
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg={ModelY}
          actions={[
            <Button isPrimary>Custom Order</Button>,
            <Button >Learn More</Button>
          ]}
        />
        <SnapItem
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg={Model3}
          actions={[
            <Button isPrimary>Custom Order</Button>,
            <Button >Existing inventory</Button>
          ]}
        />
        <SnapItem
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg={ModelX}
          actions={[
            <Button isPrimary>Custom Order</Button>,
            <Button >Existing inventory</Button>
          ]}
        />
        <SnapItem
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg={SolarPanels}
          actions={[
            <Button isPrimary>Order Now</Button>,
            <Button >Learn More</Button>
          ]}
        />
        <SnapItem
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg={SolarRoof}
          actions={[
            <Button isPrimary>Order Now</Button>,
            <Button >Learn More</Button>
          ]}
        />
        <SnapItem
          title="Accessories"
          description=""
          backgroundImg={Accessories}
          actions={[
            <Button isPrimary>Shop now</Button>
          ]}
        />
      </div>
    </div>
  );
}

export default App;
