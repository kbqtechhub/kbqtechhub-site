import type { User } from '@/payload-types';

/**
 * Extended User type that includes the roles relationship
 * This handles cases where payload-types might not be fully regenerated
 */
type UserWithRole = User & {
  roles?: string | {
    id: string;
    slug: string;
    name?: string;
    [key: string]: unknown;
  } | null;
};

/**
 * Type guard to check if roles is populated (object) vs just an ID (string)
 */
type PopulatedRole = {
  id: string;
  slug: string;
  name?: string;
  [key: string]: unknown;
};

/**
 * Get the role slug from a user's role relationship
 * Handles both populated and unpopulated relationships
 * In PayloadCMS access control, relationships are typically populated
 */
function getRoleSlug(user: UserWithRole | null | undefined): string | null {
  if (!user || !user.roles) return null;

  // If roles is a string (ID), we can't determine the slug without fetching
  // In access control contexts, PayloadCMS typically populates relationships
  // If it's just an ID, return null (access will be denied)
  if (typeof user.roles === 'string') {
    return null;
  }

  // If roles is populated (object), check for slug
  const role = user.roles as PopulatedRole;
  return role?.slug || null;
}

/**
 * Check if user has a specific role slug
 */
export function hasRole(user: UserWithRole | null | undefined, roleSlug: string): boolean {
  const userRoleSlug = getRoleSlug(user);
  return userRoleSlug === roleSlug;
}

/**
 * Check if user has any of the specified role slugs
 */
export function hasAnyRole(
  user: UserWithRole | null | undefined,
  roleSlugs: string[]
): boolean {
  const userRoleSlug = getRoleSlug(user);
  if (!userRoleSlug) return false;
  return roleSlugs.includes(userRoleSlug);
}

/**
 * Check if user is an admin
 */
export function isAdmin(user: UserWithRole | null | undefined): boolean {
  return hasRole(user, 'admin');
}

/**
 * Check if user is an editor
 */
export function isEditor(user: UserWithRole | null | undefined): boolean {
  return hasRole(user, 'editor');
}

/**
 * Check if user is a merchant
 */
export function isMerchant(user: UserWithRole | null | undefined): boolean {
  return hasRole(user, 'merchant');
}

/**
 * Check if user is an instructor
 */
export function isInstructor(user: UserWithRole | null | undefined): boolean {
  return hasRole(user, 'instructor');
}

/**
 * Check if user has content management permissions (admin or editor)
 */
export function canManageContent(user: UserWithRole | null | undefined): boolean {
  return hasAnyRole(user, ['admin', 'editor']);
}

/**
 * Check if user has store management permissions (admin or merchant)
 */
export function canManageStore(user: UserWithRole | null | undefined): boolean {
  return hasAnyRole(user, ['admin', 'merchant']);
}

/**
 * Check if user can manage courses (admin or instructor)
 */
export function canManageCourses(user: UserWithRole | null | undefined): boolean {
  return hasAnyRole(user, ['admin', 'instructor']);
}

/**
 * Check if user can manage media (admin, editor, merchant, or instructor)
 */
export function canManageMedia(user: UserWithRole | null | undefined): boolean {
  return hasAnyRole(user, ['admin', 'editor', 'merchant', 'instructor']);
}

