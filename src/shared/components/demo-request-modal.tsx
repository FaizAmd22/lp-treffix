import { Modal } from "antd";
import DemoRequestForm from "./demo-request-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DemoRequestModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onCancel={onClose} footer={null} centered width={600}>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">
          Hubungi Kami untuk Solusi Digital Terbaik
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Konsultasikan kebutuhan bisnis Anda dengan tim kami dan temukan solusi
          teknologi yang tepat. Dapatkan informasi lengkap dan mulai
          transformasi digital bisnis Anda sekarang.
        </p>

        <DemoRequestForm onSuccess={onClose} onClose={onClose} type="modal" />
      </div>
    </Modal>
  );
}
