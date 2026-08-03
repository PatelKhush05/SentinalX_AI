function PageHeader({ title, subtitle }) {
  return (
    <div>

      <h1 className="text-4xl font-bold text-slate-800">
        {title}
      </h1>

      <p className="mt-2 text-slate-500 text-lg">
        {subtitle}
      </p>

    </div>
  );
}

export default PageHeader;