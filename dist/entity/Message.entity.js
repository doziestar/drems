"use strict";
/**
@Message entity
@Notification entity
@Task entity
@Note entity
@Event entity
@Contact entity
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = exports.Event = exports.Note = exports.Task = exports.Notification = exports.Message = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const LandLord_entity_1 = require("./LandLord.entity");
const Tenant_entity_1 = require("./Tenant.entity");
let Message = class Message extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Message.prototype, "message", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.messages, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Message.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Tenant_entity_1.Tenant, tenant => tenant.messages, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'tenant_id',
    }),
    (0, tslib_1.__metadata)("design:type", Tenant_entity_1.Tenant)
], Message.prototype, "tenant", void 0);
Message = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Message);
exports.Message = Message;
let Notification = class Notification extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Notification.prototype, "notification", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.notifications, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Notification.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Tenant_entity_1.Tenant, tenant => tenant.notifications, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'tenant_id',
    }),
    (0, tslib_1.__metadata)("design:type", Tenant_entity_1.Tenant)
], Notification.prototype, "tenant", void 0);
Notification = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Notification);
exports.Notification = Notification;
let Task = class Task extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Task.prototype, "task", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.tasks, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Task.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Tenant_entity_1.Tenant, tenant => tenant.tasks, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'tenant_id',
    }),
    (0, tslib_1.__metadata)("design:type", Tenant_entity_1.Tenant)
], Task.prototype, "tenant", void 0);
Task = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Task);
exports.Task = Task;
let Note = class Note extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Note.prototype, "note", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.notes, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Note.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Tenant_entity_1.Tenant, tenant => tenant.notes, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'tenant_id',
    }),
    (0, tslib_1.__metadata)("design:type", Tenant_entity_1.Tenant)
], Note.prototype, "tenant", void 0);
Note = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Note);
exports.Note = Note;
let Event = class Event extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Event.prototype, "event", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.events, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Event.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Tenant_entity_1.Tenant, tenant => tenant.events, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'tenant_id',
    }),
    (0, tslib_1.__metadata)("design:type", Tenant_entity_1.Tenant)
], Event.prototype, "tenant", void 0);
Event = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Event);
exports.Event = Event;
class Contact extends base_entity_1.BaseEntity {
}
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Contact.prototype, "contact", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.contacts, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Contact.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Tenant_entity_1.Tenant, tenant => tenant.contacts, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'tenant_id',
    }),
    (0, tslib_1.__metadata)("design:type", Tenant_entity_1.Tenant)
], Contact.prototype, "tenant", void 0);
exports.Contact = Contact;
//# sourceMappingURL=Message.entity.js.map