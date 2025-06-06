import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import FaceBookIcon from "@/assets/icons/facebook.svg?react";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import TwitterIcon from "@/assets/icons/twitter.svg?react";
import TikTokIcon from "@/assets/icons/tiktok.svg?react";
import { Plus } from "lucide-react";

interface SocialPlatform {
  name: string;
  icon: React.ComponentType;
  baseUrl: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: "facebook",
    icon: FaceBookIcon,
    baseUrl: "https://facebook.com/",
  },
  {
    name: "instagram",
    icon: InstagramIcon,
    baseUrl: "https://instagram.com/",
  },
  {
    name: "twitter",
    icon: TwitterIcon,
    baseUrl: "https://twitter.com/",
  },
  {
    name: "tiktok",
    icon: TikTokIcon,
    baseUrl: "https://tiktok.com/@",
  },
];

interface Usernames {
  [key: string]: string;
}

interface SocialLinksFormProps {
  handleUpdateAddedLinks: (fullUrl: string, platform: string) => void;
  addedLinks: Record<string, string>;
}

const SocialLinksForm: React.FC<SocialLinksFormProps> = ({
  handleUpdateAddedLinks,
  addedLinks,
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

  return socialPlatforms.map(({ name, icon: Icon, baseUrl }) => (
    <div key={name} className="my-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {<Icon />}
        <span className="capitalize">{name}</span>
      </div>

      <div className="flex items-center gap-2">
        <Input
          disabled={!!addedLinks[name]}
          type="text"
          placeholder="Enter username"
          value={addedLinks[name] ? addedLinks[name] : usernames[name] || ""}
          onChange={(e) => handleChange(name, e.target.value)}
          className="w-28 rounded-xs border-[#00674B52] p-2 placeholder:text-xs focus-visible:ring-[#00674B52]/30"
        />
        <Button
          disabled={!!addedLinks[name]}
          type="button"
          variant="ghost"
          className="text-secondary"
          onClick={() => handleSubmit(name, baseUrl)}
        >
          <Plus />
        </Button>
      </div>
    </div>
  ));
};

export default SocialLinksForm;
