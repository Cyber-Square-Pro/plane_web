import React, { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
// ui
import { Button, CustomSelect, Input } from "@plane/ui";
// icons
import { Plus, X } from "lucide-react";
// types
import { IWorkspaceBulkInviteFormData, TUserWorkspaceRole, IWorkspaceSingleInviteFormData } from "types";
// constants
import { ROLE } from "constants/workspace";
import { log } from "console";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: IWorkspaceSingleInviteFormData) => Promise<void> | undefined;
};



type EmailRole = {
  email: string;
  role: TUserWorkspaceRole;
};

// type FormValues = {
//   emails: EmailRole[];
// };

type FormValues = {
  email: EmailRole;
};

// const defaultValues: FormValues = {
//   emails: [
//     {
//       email: "",
//       role: 15,
//     },
//   ],
// };

const defaultValues: FormValues = {
  email: {
    email: "",
    role: 15,
  }
}

export const SendWorkspaceInvitationModal: React.FC<Props> = (props) => {
  const { isOpen, onClose, onSubmit } = props;

  // form info
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IWorkspaceSingleInviteFormData>({defaultValues: {
    email: '',
    role: 15,
  },});

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: "emails",
  // });



  const handleClose = () => {
    onClose();

    const timeout = setTimeout(() => {
      // reset(defaultValues);
      clearTimeout(timeout);
    }, 350);
  };


  // const handleSendInvitation = async () => {
  //   console.log('clicked');

  // }
  // const onSubmit = async (formData: FormValues) => {
  //   if (!workspaceSlug) return;

  //   return workspaceService
  //     .inviteWorkspace(workspaceSlug, formData, user)

  //     .then(async () => {
  //       if (onSuccess) await onSuccess();
  //       handleClose();
  //       setToastAlert({
  //         type: "success",
  //         title: "Success!",
  //         message: "Invitations sent successfully.",
  //       });
  //     })
  //     .catch((err) =>
  //       setToastAlert({
  //         type: "error",
  //         title: "Error!",
  //         message: `${err.error ?? "Something went wrong. Please try again."}`,
  //       })
  //     );
  // };

  const appendField = () => {
    // append({ email: "", role: 15 });
  };

  // useEffect(() => {
  //   if (fields.length === 0) append([{ email: "", role: 15 }]);
  // }, [fields, append]);

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-20" onClose={handleClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-custom-backdrop transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-custom-background-100 p-5 text-left shadow-custom-shadow-md transition-all sm:w-full sm:max-w-2xl opacity-100 translate-y-0 sm:scale-100">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  onKeyDown={(e) => {
                    if (e.code === "Enter") e.preventDefault();
                  }}
                >
                  <div className="space-y-5">
                    {/* ... (rest of the code) ... */}
                    <div className="group relative grid grid-cols-11 gap-4">
                      <div className="col-span-7">
                        <Controller
                          control={control}
                          name="email"
                          rules={{
                            required: "Email ID is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid Email ID",
                            },
                          }}
                          render={({ field: { value, onChange } }) => (
                            <>
                              <Input
                                type="text"
                                value={value}
                                onChange={onChange}
                                placeholder="Enter their email..."
                                className="text-xs sm:text-sm w-full"
                              />
                              {errors.email && (
                                <span className="ml-1 text-red-500 text-xs">{errors.email.message}</span>
                              )}
                            </>
                          )}
                        />
                      </div>
                      <div className="col-span-3">
                        <Controller
                          control={control}
                          name="role"
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                             
                            <CustomSelect
                              value={value}
                              label={<span className="text-xs sm:text-sm">{ROLE[value as keyof typeof ROLE]}</span>}

                              onChange={onChange}
                              width="w-full"
                              input
                            >
                              {Object.entries(ROLE).map(([key, text]) => (
                                <CustomSelect.Option key={key} value={parseInt(key)}>
                                  {text}
                                </CustomSelect.Option>
                              ))}
                            </CustomSelect>

                          )}
                        />
                      </div>
                    </div>
                     
                    <div className="mt-5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Button variant="neutral-primary" size="sm" onClick={handleClose}>
                          Cancel
                        </Button>
                        <Button variant="primary" size="sm" type="submit" loading={isSubmitting}>
                          {isSubmitting ? "Sending Invitation..." : "Send Invitation"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
