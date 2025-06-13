export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Contractor & Speaker. All rights
        reserved.
      </p>
    </footer>
  );
}
