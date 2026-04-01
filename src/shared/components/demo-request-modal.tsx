/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Modal, Input, Select, Button, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { submitDemoRequest } from "../hooks/submit-demo-request";

const { Option } = Select;

const formSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor tidak valid"),
  company: z.string().min(1, "Nama perusahaan wajib diisi"),
  package: z.enum(["lite", "professional", "enterprise"], {
    message: "Pilih paket",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DemoRequestModal({ open, onClose }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      package: undefined,
    },
  });

  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);

      await submitDemoRequest({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        package: data.package,
      });

      messageApi.success("Berhasil mengajukan demo!");
      onClose();
    } catch (error: any) {
      messageApi.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={600}
      className="rounded-4xl"
    >
      {contextHolder}
      <div className="p-4">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Ajukan Demo & Konsultasi HRIS
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Isi data Anda untuk mendapatkan demo dan konsultasi software HRIS
          berbasis AI. Tim kami akan segera menghubungi Anda untuk membantu
          memilih solusi terbaik bagi absensi, payroll, dan manajemen karyawan
          perusahaan Anda.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nama */}
          <div>
            <label className="text-sm font-medium">Nama</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  className="py-2!"
                  placeholder="Masukkan Nama Anda..."
                  {...field}
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  className="py-2!"
                  placeholder="Masukkan Email Anda..."
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Nomor Handphone</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  className="py-2!"
                  placeholder="Masukkan Nomor Handphone Anda..."
                  {...field}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="text-sm font-medium">Nama Perusahaan</label>
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <Input
                  className="py-2!"
                  placeholder="Masukkan Nama Perusahaan Anda..."
                  {...field}
                />
              )}
            />
            {errors.company && (
              <p className="text-red-500 text-xs mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Package */}
          <div>
            <label className="text-sm font-medium">Paket Yang Dipilih</label>
            <Controller
              name="package"
              control={control}
              render={({ field }) => (
                <Select
                  placeholder="Pilih Paket"
                  className="w-full py-2!"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                >
                  <Option value="lite">Lite</Option>
                  <Option value="professional">Professional</Option>
                  <Option value="enterprise">Enterprise</Option>
                </Select>
              )}
            />
            {errors.package && (
              <p className="text-red-500 text-xs mt-1">
                {errors.package.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-5 pt-4">
            <Button
              onClick={onClose}
              className="rounded-full! px-8! py-7! text-base! font-semibold!"
            >
              Tutup
            </Button>

            <Button
              htmlType="submit"
              type="primary"
              loading={loading}
              className="rounded-full! px-8! py-7! text-base! font-semibold! bg-(--primary-color)"
            >
              Ajukan
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
