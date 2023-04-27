import { Container } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet/Sheet";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Container maxWidth="sm" style={{ marginTop: 100 }}>
        <Sheet
          variant="outlined"
          sx={{
            minWidth: 300,
            borderRadius: "md",
            p: 3,
          }}
        >
          <Stack spacing={2}>
            <Typography component="h2">Login</Typography>
            <Input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              onClick={() => {
                setLoading(true);
                axios
                  .post("http://localhost:5000/login", { email, password })
                  .then((res) => {
                    if (res.data.status === 200) {
                      toast(`${res.data.massage}`);
                      setLoading(false);
                      navigate("/");
                    } else if (res.data.status === 201) {
                      toast.error(`${res.data.massage}`);
                      setLoading(false);
                    } else {
                      toast.error(`${res.data.massage}`);
                      setLoading(false);
                    }
                  });
              }}
            >
              {loading ? <CircularProgress /> : "Save"}
            </Button>
            <Stack direction={"row"} spacing={1}>
              <Typography component="h2">
                Already have an account ? Register
              </Typography>
              <Link className="nav-link active text-primary" to={'/register'}>Here</Link>
            </Stack>
          </Stack>
        </Sheet>
      </Container>
    </div>
  );
}
