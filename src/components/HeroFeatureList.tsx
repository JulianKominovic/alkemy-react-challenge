import { ListGroup } from "react-bootstrap";

const HeroFeatureList = (prop: any) => {
  return (
    <>
      {Object.entries(prop).map((stat: any) => (
        <ListGroup.Item className="my-1 px-0 py-2" key={stat[0]}>
          <b>{stat[0].charAt(0).toUpperCase() + stat[0].slice(1)}</b>
          {`: ${stat[1]}`}
        </ListGroup.Item>
      ))}
    </>
  );
};

export default HeroFeatureList;
