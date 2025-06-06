import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SocialPlatform {
  name: string;
  icon: string;
  baseUrl: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: "Facebook",
    icon: "📘",
    baseUrl: "https://facebook.com/",
  },
  {
    name: "Instagram",
    icon: "📸",
    baseUrl: "https://instagram.com/",
  },
  {
    name: "Twitter",
    icon: "❌",
    baseUrl: "https://twitter.com/",
  },
  {
    name: "Tiktok",
    icon: "🎵",
    baseUrl: "https://tiktok.com/@",
  },
];

interface Usernames {
  [key: string]: string;
}

interface SocialLinksFormProps {
  handleUpdateAddedLinks: (fullUrl: string, platform: string) => void;
}

const SocialLinksForm: React.FC<SocialLinksFormProps> = ({
  handleUpdateAddedLinks,
}) => {
  const [usernames, setUsernames] = useState<Usernames>({});

  const handleChange = (platform: string, value: string) => {
    setUsernames((prev) => ({ ...prev, [platform]: value }));
  };

  const handleSubmit = (platform: string, baseUrl: string) => {
    const username = usernames[platform];

    if (!username || username.trim() === "") {
      toast.error("Please enter a valid username");
      return;
    }

    const fullUrl = baseUrl + username.trim();
    handleUpdateAddedLinks(fullUrl, platform);
    toast.success(`${platform} URL saved: ${fullUrl}`);
  };

  return socialPlatforms.map(({ name, icon, baseUrl }) => (
    <div key={name} className="my-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="hidden text-lg">{icon}</span>
        <span>{name}</span>
      </div>

      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Enter username"
          value={usernames[name] || ""}
          onChange={(e) => handleChange(name, e.target.value)}
          className="w-32 rounded-xs border-[#00674B52] focus-visible:ring-[#00674B52]/30"
        />
        <Button
          type="button"
          variant="ghost"
          className="text-secondary"
          onClick={() => handleSubmit(name, baseUrl)}
        >
          Submit
        </Button>
      </div>
    </div>
  ));
};

export default SocialLinksForm;
