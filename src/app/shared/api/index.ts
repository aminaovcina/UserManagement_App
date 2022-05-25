export default {
  //status
  statusController: '/Status',
  //permission
  permissionController: '/Permission',
  //user
  userController: '/User',
  userController_id: (id: number) => `/User/${id}`,
  userController_list: '/User/list',
  userController_assignUserPermissions: '/User/AssignUserPermissions',
  //user permission
  userPermissionController_id: (id: number) => `/UserPermission/${id}`,
};
