import Camera from "@/assets/icons/camera.svg?react";
import Email from "@/assets/icons/email.svg?react";
import Phone from "@/assets/icons/phone-settings.svg?react";
import UserProfileDetails from "./_components/UserProfileDetails";
import UserPersonalIntegrations from "./_components/UserPersonalIntegrations";

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
    <section className="w-full p-4 bg-[#F6F6F6] min-h-screen">
      <main className="max-w-3xl mx-auto mt-7">
        <header className="mb-3">
          <h1 className="text-2xl font-semibold text-[#1A1A1A]">Profile</h1>
          <p className="text-sm text-[#535353] mt-1">
            Manage your Yumdash profile
          </p>
        </header>

        {/* Display Picture Section */}
        <div className="bg-[#00674B29] border border-[#00674B29] border-b-transparent rounded-t-md p-6">
          <h2 className="text-xs text-[#535353f2]">Display Picture</h2>

          <div className="relative size-52 rounded-full mx-auto overflow-hidden">
            {/* Initial image (user initials) */}
            <div className="w-full h-full bg-[#2D68FF] flex items-center justify-center">
              <span className="text-8xl font-medium text-white">JS</span>
            </div>

            {/* upload section */}
            <div className="bg-white/70 absolute left-0 bottom-0 flex items-center justify-center w-full">
              {/* Camera Upload Button */}
              <label className="p-2.5 cursor-pointer">
                <Camera className="size-8 text-[#1A1A1A]" />
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className="bg-white rounded-b-md border border-[#00674B29] border-t-0 p-6">
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

        <div className="bg-white rounded-md border border-[#00674B29] mt-4 overflow-hidden">
          <div className="w-full bg-[#00674B29] py-3 px-6">
            <h2 className="text-xs text-[#535353f2] ">Personal Integrations</h2>
          </div>

          <div className="px-4">
            {userIntegrations.map(({ label, icon, onClick }) => (
              <UserPersonalIntegrations
                label={label}
                onClick={onClick}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Settings;
