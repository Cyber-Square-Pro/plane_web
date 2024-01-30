import { ReactElement } from "react";
// layout
import { AppLayout } from "layouts/app-layout";
import { ProjectSettingLayout } from "layouts/settings-layout";
// components

import {CreateStateModal, ProjectSettingStateList } from "components/states";
import { ProjectSettingHeader } from "components/headers";
// types
import { NextPageWithLayout } from "types/app";
//icons
import { MoveRight, Plus } from "lucide-react";
// import { useMobxStore } from "lib/mobx/store-provider";


// const {  commandPalette: commandPaletteStore } = useMobxStore();

const StatesSettingsPage: NextPageWithLayout = () => (
  <div className="pr-9 py-8 gap-10 w-full overflow-y-auto">
    <div className="flex items-center py-3.5 border-b border-custom-border-100">
      {/* <h3 className="text-xl font-medium">Status</h3>  */}
      {/* <button
                    type="button"
                    className="flex items-center gap-2 text-custom-primary-100 px-2 hover:text-custom-primary-200 outline-none"
                    // onClick={() => commandPaletteStore.toggleCreateStateModal(true)}
                  >
                    <Plus className="h-4 w-4" />
                  </button> */}
    </div>
    <ProjectSettingStateList />
  </div>
  
);


StatesSettingsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout withProjectWrapper header={<ProjectSettingHeader title="States Settings" />}>
      <ProjectSettingLayout>{page}</ProjectSettingLayout>
    </AppLayout>
  );
};

export default StatesSettingsPage;
