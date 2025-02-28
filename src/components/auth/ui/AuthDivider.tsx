function AuthDivider() {
  return (
    <div className="relative my-3">
      <div className="h-[0.1rem] bg-[#5799E333]" />
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white w-1/3 font-medium text-center text-sm text-[#011933CC] h-fit">
        OR
      </span>
    </div>
  );
}

export default AuthDivider;
