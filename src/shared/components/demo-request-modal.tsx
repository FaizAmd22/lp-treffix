import { Modal } from "antd";
import DemoRequestForm from "./demo-request-form";

interface Props {
  open: boolean;
  onClose: () => void;
  packageValue?: string;
  productValue?: string;
  title?: string;
  desc?: string;
  submitText?: string;
}

export default function DemoRequestModal({
  open,
  onClose,
  productValue,
  packageValue,
  title,
  desc,
  submitText,
}: Props) {
  return (
    <Modal open={open} onCancel={onClose} footer={null} centered width={600}>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">
          {title ? title : "Hubungi Kami untuk Solusi Digital Terbaik"}
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          {desc
            ? desc
            : "Konsultasikan kebutuhan bisnis Anda dengan tim kami dan temukan solusi teknologi yang tepat. Dapatkan informasi lengkap dan mulai transformasi digital bisnis Anda sekarang."}
        </p>

        <DemoRequestForm
          onSuccess={onClose}
          onClose={onClose}
          type="modal"
          packageValue={packageValue}
          productValue={productValue}
          submitText={submitText}
        />
      </div>
    </Modal>
  );
}
