const userPermissions = [
  "read:profile",
  "write:posts",
  "delete:posts",
  "view:dashboard",
];

// 頁面或功能所需的最低權限：
const featureRequirements = {
  // 需要使用者擁有 'read:profile' 和 'view:dashboard' 才能存取
  featureA: ["read:profile", "view:dashboard"],
  // 需要使用者擁有 'write:posts' 和 'delete:posts' 才能存取
  featureB: ["write:posts", "delete:posts"],
  // 需要使用者擁有 'admin:full' 才能存取 (用戶沒有此權限)
  featureC: ["admin:full", "view:dashboard"],
};

const canAccessFeature = (userPerms, requiredPerms) => {
  return requiredPerms.every((requiredPerm) => {
    return userPerms.includes(requiredPerm);
  });
};

// 執行測試：
console.log(
  `用戶是否可以存取 Feature A? ${canAccessFeature(
    userPermissions,
    featureRequirements.featureA
  )}`
);
console.log(
  `用戶是否可以存取 Feature B? ${canAccessFeature(
    userPermissions,
    featureRequirements.featureB
  )}`
);
console.log(
  `用戶是否可以存取 Feature C? ${canAccessFeature(
    userPermissions,
    featureRequirements.featureC
  )}`
);

// 用戶是否可以存取 Feature A? true
// 用戶是否可以存取 Feature B? true
// 用戶是否可以存取 Feature C? false
