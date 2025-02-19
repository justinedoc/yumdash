type FormHeaderType = {
  title: string;
  children: string;
};

function FormHeader({ title, children }: FormHeaderType) {
  return (
    <header className="w-full md:text-center">
      <h1 className="text-3xl md:text-2xl font-bold">{title}</h1>
      <p className="text-sm text-[#535353] mt-2 md:mt-1">
        {children}
      </p>
    </header>
  );
}

export default FormHeader;
