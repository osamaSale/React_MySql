import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
export function Insert({ openAdd, setOpenAdd, user, update }) {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState(user ? user.password : "");
  const [phone, setPhone] = useState(user ? user.phone : "");
  const [authorization, setAuthorization] = useState(
    user ? user.authorization : ""
  );
  const [image, setImage] = useState(user ? user.fileImage : null);
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      open={openAdd}
      onClose={() => setOpenAdd(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          minWidth: 600,
          borderRadius: "md",
          p: 3,
        }}
      >
        <Stack spacing={2}>
          <Typography component="h2">Add User</Typography>
          <Input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
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
          <Input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <select
            name="authorization"
            className="form-control"
            onChange={(e) => setAuthorization(e.target.value)}
          >
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Stack
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={2}
          >
            <Button
              onClick={() => {
                const fromData = new FormData();
                fromData.append("name", name);
                fromData.append("email", email);
                fromData.append("password", password);
                fromData.append("phone", phone);
                fromData.append("authorization", authorization);
                if (image) {
                  fromData.append("image", image, image.name);
                }
                setLoading(true);

                axios
                  .post("http://localhost:5000/users", fromData)
                  .then((res) => {
                    if (res.data.status === 200) {
                      toast(`${res.data.massage}`);
                      update();
                      setLoading(false);
                      setOpenAdd(false);
                    } else if (res.data.status === 201) {
                      toast.error(`${res.data.massage}`);
                      setLoading(false);
                    } else {
                      toast.error(`${res.data.massage}`);
                    }
                  });
              }}
            >
              {loading ? <CircularProgress /> : "Save"}
            </Button>
            <Button
              color="danger"
              onClick={() => {
                setOpenAdd(false);
              }}
            >
              Close
            </Button>
          </Stack>
        </Stack>
      </Sheet>
    </Modal>
  );
}
