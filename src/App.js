import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const App = () => {
  const [currentForm, setCurrentForm] = useState(0);
  return (
    <div>
      <Grid
        container
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid
          style={{
            height: "60px",
            marginTop: "0",
          }}
          item
          xs={6}
          sm={4}
        >
          <Paper
            onClick={() => {
              setCurrentForm(0);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              cursor: "pointer",
              borderRadius: "0",
              backgroundColor: currentForm === 0 ? "lightgray" : "white",
              borderBottom: currentForm === 0 ? "4px solid black" : "none",
            }}
          >
            <h3>Business Profile</h3>
          </Paper>
        </Grid>
        <Grid
          style={{
            height: "60px",
            marginTop: "0",
          }}
          item
          xs={6}
          sm={4}
        >
          <Paper
            onClick={() => {
              setCurrentForm(1);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: currentForm === 1 ? "lightgray" : "white",
              width: "100%",
              cursor: "pointer",
              borderRadius: "0",
              borderBottom: currentForm === 1 ? "4px solid black" : "none",
            }}
          >
            <h3>Banking details</h3>
          </Paper>
        </Grid>
        <Grid
          style={{
            height: "60px",
            marginTop: "0",
          }}
          item
          xs={6}
          sm={4}
        >
          <Paper
            onClick={() => {
              setCurrentForm(2);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: currentForm === 2 ? "lightgray" : "white",
              width: "100%",
              cursor: "pointer",
              borderRadius: "0",
              outline: "none",
              borderBottom: currentForm === 2 ? "4px solid black" : "none",
            }}
          >
            <h3>Identity Proof</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
