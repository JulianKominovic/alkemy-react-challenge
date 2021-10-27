import { ListGroup, ProgressBar } from "react-bootstrap";

interface HomeStatsProps {
  stat: any;
  heroesList: any;
}

const HomeStats = ({ stat, heroesList }: HomeStatsProps): JSX.Element => {
  return (
    <ListGroup.Item key={stat.property}>
      <div className="me-auto">
        <div className="fw-bold">
          {stat.property.charAt(0).toUpperCase() + stat.property.slice(1)}
        </div>
      </div>
      <ProgressBar
        className="my-2"
        variant={
          stat.value > (heroesList.length * 100) / 2 ? "danger" : "warning"
        }
        now={parseInt(stat.value)}
        label={stat.value === "null" ? 0 : stat.value + " pts."}
        max={heroesList.length * 100}
      />
    </ListGroup.Item>
  );
};

export default HomeStats;
