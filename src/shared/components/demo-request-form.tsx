/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input, Select, Button, message } from "antd";
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
  product: z.string().min(1, "Pilih produk"),
  package: z.string().min(1, "Pilih paket"),
});

export type FormValues = z.infer<typeof formSchema>;

interface Props {
  onSuccess?: () => void;
  onClose?: () => void;
  type: "home" | "modal";
  packageValue?: string;
  productValue?: string;
  submitText?: string;
}

export default function DemoRequestForm({
  onSuccess,
  onClose,
  type,
  packageValue,
  productValue,
  submitText = "Kirim",
}: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    values: {
      name: "",
      email: "",
      phone: "",
      company: "",
      product: productValue ?? "",
      package: packageValue ?? "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);

      await submitDemoRequest(data);

      messageApi.success("Berhasil mengajukan demo!");
      onSuccess?.();
    } catch (error: any) {
      messageApi.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}

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
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
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
                placeholder="Masukkan Nomor Handphone..."
                {...field}
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
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
                placeholder="Masukkan Nama Perusahaan..."
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

        {/* Product */}
        {!productValue && (
          <div>
            <label className="text-sm font-medium">Produk</label>
            <Controller
              name="product"
              control={control}
              render={({ field }) => (
                <Select
                  className="w-full py-2!"
                  placeholder="Pilih Produk yang Dibutuhkan"
                  value={field.value || undefined}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                >
                  <Option value="fixwork">Manajemen Karyawan (HRMS)</Option>
                </Select>
              )}
            />
            {errors.product && (
              <p className="text-red-500 text-xs mt-1">
                {errors.product.message}
              </p>
            )}
          </div>
        )}

        {/* Package */}
        <div>
          <label className="text-sm font-medium">Paket Yang Dipilih</label>
          <Controller
            name="package"
            control={control}
            render={({ field }) => (
              <Select
                className="w-full py-2!"
                placeholder="Pilih Paket"
                value={field.value || undefined}
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
        {type === "modal" ? (
          <div className="grid grid-cols-2 gap-5 pt-4">
            <Button
              onClick={onClose}
              className="rounded-full! px-8! py-6! font-semibold!"
            >
              Tutup
            </Button>

            <Button
              htmlType="submit"
              type="primary"
              loading={loading}
              className="rounded-full! px-8! py-6! font-semibold! bg-(--primary-color)!"
            >
              {submitText}
            </Button>
          </div>
        ) : (
          <div className="pt-4">
            <Button
              htmlType="submit"
              type="primary"
              loading={loading}
              className="w-full! rounded-full! py-6! font-semibold! bg-(--primary-color)!"
            >
              {submitText}
            </Button>
          </div>
        )}
      </form>
    </>
  );
}
