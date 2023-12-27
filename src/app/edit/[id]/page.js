"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormTextField from "../../components/FormTextField/FormTextField";
import personSchema from "./formValidation";
import PopUp from "../../components/PopUp/PopUp";
import { putData } from "../../utils/api";

export default function Edit({ params }) {
  const [data, setData] = useState({});
  const [modalData, setModalData] = useState({ show: false, success: false });
  const [showError, setShowError] = useState(false);

  const router = useRouter();

  const rhform = useForm({
    defaultValues: { name: "", username: "", email: "", phone: "" },
    data,
    resolver: yupResolver(personSchema),
  });
  const { register, handleSubmit, reset, getValues, formState } = rhform;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        reset(data);
      });
  }, [params.id, reset]);

  const onSubmit = async () => {
    const updatedValues = getValues();
    const response = await putData(
      `https://jsonplaceholder.typicode.com/users/${params.id}`,
      updatedValues
    );
    console.log(response);
    if (!!response) {
      setModalData({ show: true, success: true });
    } else {
      setModalData({ show: true, success: false });
    }
  };
  const onError = (e) => {
    console.log(e);
    setShowError(true);
  };

  const handleClose = () => {
    setModalData({ show: false, success: false });
    router.push("/");
  };

  const { errors } = formState;
  return (
    <div className="m-2 h-svh bg-slate-100">
      <PopUp
        data={data}
        open={modalData.show}
        handleClose={handleClose}
        success={modalData.success}
      />

      <Box
        className="flex flex-col items-start justify-start w-full h-5/6 p-8"
        autoComplete="off"
        component="form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex items-start ">
          <Button>
            <Link href={`/`}>Cancel</Link>
          </Button>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1>Edit Customer:</h1>
          <h2>{data.name}</h2>
          <div className="flex md:flex-row items-start justify-center w-full flex-col m-0 mb-6">
            <Stack className="md:mr-6">
              <FormTextField
                name="name"
                data={data}
                register={register}
                errors={errors}
              />
              <FormTextField
                name="username"
                data={data}
                register={register}
                errors={errors}
              />
              <FormTextField
                name="email"
                data={data}
                register={register}
                errors={errors}
              />
              <FormTextField
                name="phone"
                data={data}
                register={register}
                errors={errors}
              />
            </Stack>
            <Stack>
              <FormTextField
                name="details"
                data={data}
                register={register}
                errors={errors}
                multiline
              />
            </Stack>
          </div>
          <Button variant="outlined" type="submit">
            Update
          </Button>
        </div>
      </Box>
    </div>
  );
}
