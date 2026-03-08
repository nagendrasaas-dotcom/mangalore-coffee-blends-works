const WhatsAppButton = () => {
  const phone = "919663770408";
  const message = "Hello! I'm interested in CS Coffee Works products.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.648 4.804 1.783 6.818L2 30l7.363-1.755A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.471a11.43 11.43 0 0 1-5.845-1.601l-.419-.249-4.368 1.041 1.063-4.257-.274-.437A11.414 11.414 0 0 1 4.586 16c0-6.298 5.122-11.42 11.42-11.42S27.417 9.702 27.417 16s-5.116 11.471-11.414 11.471zm6.265-8.562c-.344-.172-2.035-1.004-2.351-1.119-.316-.115-.547-.172-.777.172-.23.344-.893 1.119-1.095 1.35-.201.23-.402.258-.746.086-.344-.172-1.452-.535-2.767-1.707-1.022-.912-1.713-2.038-1.914-2.382-.201-.344-.021-.53.151-.701.155-.154.344-.402.516-.603.172-.201.23-.344.344-.574.115-.23.058-.431-.029-.603-.086-.172-.777-1.873-1.065-2.562-.28-.673-.566-.582-.777-.593l-.661-.011c-.23 0-.603.086-.918.431-.316.344-1.208 1.181-1.208 2.879s1.237 3.34 1.409 3.571c.172.23 2.434 3.716 5.899 5.21.824.356 1.467.569 1.969.729.827.263 1.58.226 2.175.137.663-.099 2.035-.831 2.322-1.635.287-.803.287-1.491.201-1.635-.085-.143-.316-.23-.66-.402z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
