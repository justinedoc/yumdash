import Email from "@/assets/icons/email.svg?react";
import Phone from "@/assets/icons/phone-settings.svg?react";
import UserProfileDetails from "./_components/UserProfileDetails";
import UserPersonalIntegrations from "./_components/UserPersonalIntegrations";
import ImageCropper from "./_components/ImageCropper";

function Settings() {
  function handleEdit(label: "email" | "fullname") {
    switch (label) {
      case "email":
        console.log("Edit email");
        break;
      case "fullname":
        console.log("Edit fullname");
        break;
      default:
        break;
    }
  }

  function handleLinkAccount(account: string) {
    console.log(`Link ${account}`);
  }

  const userIntegrations = [
    {
      label: "email",
      icon: Email,
      onClick: () => handleLinkAccount("email"),
    },
    {
      label: "fullname",
      icon: Phone,
      onClick: () => handleLinkAccount("fullname"),
    },
  ];

  return (
    <section className="min-h-screen w-full bg-[#F6F6F6] p-4">
      <main className="mx-auto mt-7 max-w-3xl">
        <header className="mb-3">
          <h1 className="text-2xl font-semibold text-[#1A1A1A]">Profile</h1>
          <p className="mt-1 text-sm text-[#535353]">
            Manage your Yumdash profile
          </p>
        </header>

        {/* Display Picture Section */}
        <div className="rounded-t-md border border-[#00674B29] border-b-transparent bg-[#00674B29] p-6">
          <h2 className="text-xs text-[#535353f2]">Display Picture</h2>

          <div className="relative mx-auto size-52 overflow-hidden rounded-full">
            <ImageCropper />
          </div>
        </div>

        {/* Account Details */}
        <div className="rounded-b-md border border-t-0 border-[#00674B29] bg-white p-6">
          {[
            {
              label: "email",
              value: "Janesnow57@gmail.com",
              onClick: () => handleEdit("email"),
            },
            {
              label: "fullname",
              value: "Jane Snow",
              onClick: () => handleEdit("fullname"),
            },
          ].map(({ label, value, onClick }) => (
            <UserProfileDetails label={label} value={value} onClick={onClick} />
          ))}
        </div>

        {/* Integrations */}

        <div className="mt-4 overflow-hidden rounded-md border border-[#00674B29] bg-white">
          <div className="w-full bg-[#00674B29] px-6 py-3">
            <h2 className="text-xs text-[#535353f2]">Personal Integrations</h2>
          </div>

          <div className="px-4">
            {userIntegrations.map(({ label, icon, onClick }) => (
              <UserPersonalIntegrations
                label={label}
                onClick={onClick}
                icon={icon}
                key={label}
              />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Settings;
