import logo from "./logo.svg";
import "./App.css";
import { Container, Snackbar } from "@mui/material";
//import Container from '@mui/material/Button';

import Header from "./components/header";

function App() {
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header></Header>
    </Container>
  );
}

export default App;
