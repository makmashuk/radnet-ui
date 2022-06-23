import './App.css';
import ProgressLineMultiple from './Components/ProgressLineMuliple';
import ProgressLineSingle from './Components/ProgressLineSingle';
import RadTable from './Components/RadTable';
import Charts from './Components/Charts';
import { DoughnutChart } from './Components/Doughnut';
import LineChart from './Components/LineChart';

function App() {
  return (
    <div className="App">
      <div style={{ width: '40%', margin: 'auto' }}>

        <ProgressLineSingle
          label="Tissue Labeling"
          width="70"
          type="horizontal"
          size="medium"
        />
        <hr />
        <ProgressLineSingle
          label="Tissue Labeling"
          width="60"
          type="horizontal"
        />
        <hr />
        <ProgressLineSingle
          label="Tissue Labeling"
          width="40"
          size="medium"
        />
        <hr />
        <ProgressLineSingle
          label="Tissue Labeling"
          width="40"
        />
        <hr />
        <ProgressLineMultiple
          size="medium"
          progressParts={[
            {
              percentage: "20",
              color: "#27C052"
            },
            {
              percentage: "33",
              color: "#ABD84B"
            },
            {
              percentage: "15",
              color: "#DF6666"
            },
          ]}
        />
        <hr />
        <ProgressLineMultiple
          progressParts={[
            {
              percentage: "50",
              color: "#27C052"
            },
            {
              percentage: "13",
              color: "#ABD84B"
            },
            {
              percentage: "15",
              color: "#DF6666"
            },
          ]}
        />

      </div>
      <div style={{ width: '30%', margin: 'auto', background: '#FFFFFF' }}>
        <Charts />
      </div>
      <div style={{ width: '60%', margin: 'auto', background: '#FFFFFF' }}>
        <LineChart />
      </div>
      <div style={{ width: '40%', height: '10em', margin: 'auto' }}>
        <DoughnutChart />
      </div>



      <div style={{ width: '70%', margin: 'auto', padding: '1em' }}>
        <RadTable />

      </div>




    </div>
  );
}

export default App;
