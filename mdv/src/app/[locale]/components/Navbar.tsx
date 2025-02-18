import LocaleSwitcher from "./localeComponents/LocaleSwitcher";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <LocaleSwitcher />
    </div>
  );
}
