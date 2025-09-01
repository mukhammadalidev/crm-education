import { Button, DatePicker, Input, Select, Space, Slider, Progress } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import axios from "axios";

function AddStudent() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      active: 0, // default 0%
    },
  });

  const onSubmit = (data) => {
    // Date ni DRF formatiga o'zgartirish
    if (data.birth_date) {
      data.birth_date = dayjs(data.birth_date).format("YYYY-MM-DD");
    }

    // active Slider dan number sifatida keladi — agar string bo'lsa parseInt qilamiz
    if (typeof data.active === "string") {
      data.active = parseInt(data.active, 10);
    }

    axios
      .post("http://localhost:8000/api/students/", data)
      .then((response) => {
        console.log("Student added successfully:", response.data);
        reset();
      })
      .catch((error) => {
        console.error("There was an error adding the student!", error.response?.data || error);
      });
  };

  return (
    <div style={{ padding: 24, minWidth: 300 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input {...field} placeholder="Name" style={{ marginBottom: 16 }} />
          )}
        />

        {/* Date of Birth */}
        <Controller
          control={control}
          name="birth_date"
          render={({ field }) => (
            <DatePicker
              style={{ width: "100%", marginBottom: 16 }}
              placeholder="Date of Birth"
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />

        {/* Telegram Username */}
        <Controller
          control={control}
          name="telegram_username"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Telegram Username"
              style={{ marginBottom: 16 }}
            />
          )}
        />

        {/* Course */}
        <Controller
          control={control}
          name="course"
          render={({ field }) => (
            <Input {...field} placeholder="Course" style={{ marginBottom: 16 }} />
          )}
        />

        {/* Group */}
        <Controller
          control={control}
          name="group"
          render={({ field }) => (
            <Select
              {...field}
              style={{ width: "100%", marginBottom: 16 }}
              placeholder="Select Group"
              options={[
                { value: "Frontend", label: "Frontend" },
                { value: "Backend", label: "Backend" },
              ]}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />

        {/* Active: Slider (0-100) + visual Progress */}
        <Controller
          control={control}
          name="active"
          defaultValue={0}
          render={({ field }) => (
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div>Active: {field.value ?? 0}%</div>
                {/* small circular progress */}
                <Progress type="circle" percent={field.value ?? 0} width={40} />
              </div>

              <Slider
                {...field}
                min={0}
                max={100}
                onChange={(value) => field.onChange(value)}
                value={typeof field.value === "number" ? field.value : 0}
                tooltip={{ formatter: (val) => `${val}%` }}
              />
            </div>
          )}
        />

        {/* Phone */}
        <Space.Compact style={{ marginBottom: 16, width: "100%" }}>
          <Controller
            control={control}
            name="phone_number"
            render={({ field }) => (
              <Input {...field} placeholder="Phone Number" style={{ width: "100%" }} />
            )}
          />
        </Space.Compact>

        {/* Submit */}
        <Button
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: "#5D5FEF",
            borderColor: "#5D5FEF",
            float: "right",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddStudent;
