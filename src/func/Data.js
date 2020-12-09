import Axios from "axios";

import { useState, useEffect } from "react";
import { Button, Dimmer, Header, Loader } from "semantic-ui-react";

export default (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [countX, setCountX] = useState(0);

  // {
  //   "id": 1,
  //   "email": "george.bluth@reqres.in",
  //   "first_name": "George",
  //   "last_name": "Bluth",
  //   "avatar": "https://reqres.in/img/faces/1-image.jpg"
  // }

  // componentDidMount && ComponentDidUpdate
  // componetDidUnmount

  // if I have [] has secon argumnent
  // this will only get called on
  // componentDidMount

  useEffect(() => {
    Axios.get("https://reqres.in/api/users?delay=1")
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });

    return () => {
      console.log("cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("any state has changed");

    return () => {
      console.log("cleanup1");
    };
  });

  // called on mount and when count state changes
  useEffect(() => {
    console.log("count state has changed");
    if (count > 10) {
      setCount(0);
    }

    return () => {
      console.log("cleanup2");
    };
  }, [count]);

  const renderLoader = () => {
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  };

  const renderData = () => {
    return data.map((d) => {
      return <h1 key={d.id}>{d.email}</h1>;
    });
  };
  return (
    <div>
      <Header>Data Demo</Header>
      {loading && renderLoader()}
      {renderData()}
      <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
      <Button onClick={() => setCountX(countX + 1)}>CountX: {countX}</Button>
    </div>
  );
};

// export default Data;
