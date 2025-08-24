import { Button, DatePicker, Input, Select, Slider, Space } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";

function AddStudent() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);

    // Date validation
    if (data.dateOfBirth && data.dateOfBirth.isValid()) {
      console.log("Valid date:", data.dateOfBirth.format("YYYY-MM-DD"));
    } else {
      console.log("Invalid or empty date");
    }
  };

  return (
    <div>
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
          name="dateOfBirth"
          render={({ field }) => (
            <DatePicker
              style={{ width: "100%", marginBottom: 16 }}
              placeholder="Date of Birth"
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />

        {/* Telegram ID */}
        <Controller
          control={control}
          name="telegramId"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Telegram ID"
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

        {/* Status */}
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Select
              {...field}
              style={{ width: 200, marginBottom: 16 }}
              placeholder="Select Status"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "disabled", label: "Disabled", disabled: true },
                { value: "yiminghe", label: "Yiminghe" },
              ]}
            />
          )}
        />

        {/* Active Slider */}
        <Controller
          control={control}
          name="active"
          defaultValue={0}
          render={({ field }) => (
            <Slider
              {...field}
              min={0}
              max={100}
              style={{ marginBottom: 16 }}
              tooltip={{ formatter: (value) => `${value}%` }}
            />
          )}
        />

        {/* Phone */}
        <Space.Compact style={{ marginBottom: 16, width: "100%" }}>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <Input {...field} style={{ width: "20%" }} defaultValue="+998" />
            )}
          />
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <Input
                {...field}
                style={{ width: "80%" }}
                defaultValue="26888888"
              />
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
