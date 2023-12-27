function FormTextField({ register, name, required, data, multiline, errors }) {
  return (
    <div>
      <label htmlFor={name}>Update {name}: </label>
      {multiline ? (
        <textarea
          width="300"
          className="bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          id={name}
          placeholder={data[name] || name}
        />
      ) : (
        <input
          width="300"
          className="bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          id={name}
          placeholder={data[name] || name}
          required={!!required}
          {...register(name)}
        />
      )}
      {errors[name] ? (
        <div
          className="p-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          {errors[name].message}
        </div>
      ) : (
        <div className="h-6" />
      )}
    </div>
  );
}

export default FormTextField;
