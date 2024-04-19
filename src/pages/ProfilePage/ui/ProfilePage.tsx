import { FC } from "react";
import { EditableProfileCard } from "features/EditableProfileCard";
import { Layout } from "shared/ui/Layout/Layout";

const ProfilePage: FC = () => {
  return (
    <Layout>
      <EditableProfileCard />
    </Layout>
  );
};

export default ProfilePage;
